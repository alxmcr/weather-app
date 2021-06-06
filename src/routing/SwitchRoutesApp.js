import { HomePage } from "pages/HomePage/HomePage"
import { Route, Switch } from "react-router-dom"

export const SwitchRoutesApp = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
        </Switch>
    )
}