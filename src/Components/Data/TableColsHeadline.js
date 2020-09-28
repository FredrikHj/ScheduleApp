// ================================================== SQLCol header ==================================================
import { correctRoutes } from './runAppUrls';
import { routeName } from './RouteNames';

export const TableColsHeadline = () =>{
    let colsHeadlineArr = [];
    if(correctRoutes() === routeName.mainPage) {
        colsHeadlineArr = ['Datum', 'Akitvitet', 'Berörda', 'Typ', 'Plats', 'Innehåll'];

        return colsHeadlineArr;
    }
    if(correctRoutes() === routeName.mainPage+routeName.login) {
        colsHeadlineArr = ['Datum', 'Akitvitet', 'Berörda', 'Typ', 'Plats', 'Innehåll', 'Verktyg'];
        return colsHeadlineArr;
    }
}