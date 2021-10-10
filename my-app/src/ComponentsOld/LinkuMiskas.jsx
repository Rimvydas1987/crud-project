import { Link, Switch, Route } from "react-router-dom";
import Street from "./Street";

function LinkuMiskas() {
    return(
        <div className="forest">
            <nav>
                <Link to={'home'}><h3>Linku Miskas</h3></Link>
                <Link to={'road'}><h3>Misko takelis</h3></Link>
                <Link to={'street'}><h3>Misko plentas</h3></Link>
                    <div>
                        <Link to={'/1'}><h3>Misko gatve1</h3></Link>
                        <Link to={'/2'}><h3>Misko gatve2</h3></Link>
                        <Link to={'/3'}><h3>Misko gatve3</h3></Link>
                        <Link to={'/4'}><h3>Misko gatve4</h3></Link>
                    </div>
            </nav>
            <Switch>
            {/* <Route exact path={'/'}>   galima taip(kad rodytu tik sita)

                <h1>The Begining</h1>

            </Route> */}
            <Route path={'/home'}>
                <h1>The Home</h1>
            </Route>
            <Route path={'/road'}>
                <h1>The Road</h1>
            </Route>
            <Route path={'/:street'} children={<Street/>}>
            </Route>
            <Route path={'/'}>
                <h1>The Begining</h1>
            </Route>
        </Switch>
        </div>
    )
};

export default LinkuMiskas;