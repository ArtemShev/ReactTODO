import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center">
          <h1 className="">Моя работа</h1>
          <span className="mt-5 fs-3">Это мое превое приложение на React, перейди по ссылке в шапке к списку дел</span>
        </div>
    );
  }
}
