import React from "react";
import withFirebase from "./withFirebase";

const AuthUserContext = React.createContext(null);

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      this.addUsers();
      // this.listener = this.props.firebase.auth.onAuthStateChanged(
      //   (authUser) => {
      //     authUser
      //       ? this.setState({ authUser })
      //       : this.setState({ authUser: null });
      //   }
      // );
    }

    componentWillUnmount() {
      this.listener();
    }

    addUsers = async() => {
      this.listener = await this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          if (authUser) {
            this.props.db
              .collection("Stores")
              .doc(authUser.uid)
              .onSnapshot((querySnapshot) => {
                if (!querySnapshot.exists) {
                  this.props.db
                    .collection("Stores")
                    .doc(authUser.uid)
                    .set({
                      email: authUser.email,
                      displayName: authUser.displayName,
                      access: {},
                      phoneNumber: authUser.phoneNumber,
                      imageURL: authUser.photoURL,
                      status: "pending",
                    })
                    .then(() => {
                      localStorage.user = JSON.stringify(authUser);
                      this.setState({ authUser });
                    })
                    .catch((error) => console.log("AuthuserError", error));
                } else {
                  const userData = querySnapshot.data();
                  userData.uid = authUser.uid;
                  this.setState({ authUser: userData });
                  console.log("already existing");
                }
              });
            this.setState({ authUser });
          } else { 
            this.setState({ authUser: null });
          }
        }
      );
    };
    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export { AuthUserContext };
export default withAuthentication;
