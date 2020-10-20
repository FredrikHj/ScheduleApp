// ================================================== SQLCol header ==================================================
<<<<<<< HEAD
export const TableColsHeadlineOutloged = ['Datum', 'Akitvitet', 'Berörda', 'Typ', 'Plats', 'Innehåll'];
export const TableColsHeadlineInloged = ['Datum', 'Akitvitet', 'Berörda', 'Typ', 'Plats', 'Innehåll', 'Verktyg'];
=======
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
>>>>>>> b87f68ab5510fa1be005a204842a139f105104cc
