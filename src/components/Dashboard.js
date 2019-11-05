import React from "react";
import BooksForm from "./BooksForm";
import BooksList from "./BooksList";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function Dashboard({auth}) {
  if(!auth.uid) return <Redirect to='/signin'/>
  return (
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard)
