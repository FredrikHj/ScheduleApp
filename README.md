This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

En schemaApp där designen är enkel likt den excelfilen jag fick!

The webapp can be seen at:
https://fredrikhj.github.io/ScheduleApp/#/

Backend is hosted by Heroku and made in NodeJS with Express JS.

koder:
kod  för att tabort:
let newMTodoList = [...this.state.todoItem.slice(0, targetRemoveBtnIndex), ...this.state.todoItem.slice(targetRemoveBtnIndex + 1)];

filtrera:
    let movieData = this.state.movieList;
    let filterList = movieData.filter((movieListData) =>
      {
        return movieListData.title.includes(this.state.searchMovieText)
          || movieListData.director.includes(this.state.searchMovieText)
      }
    )

    filterList måste mappas! 