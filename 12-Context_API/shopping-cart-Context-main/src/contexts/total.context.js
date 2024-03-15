import { createContext } from "react";

const TotalContext = createContext();

export default TotalContext;
/*
    Suppose we have two context one is theme and another one is for userlogin
    information means user login or not, however both features is required on
    the whole app but both we can't use in single context because both are
    independent and not related to each other, so that's why we need to create
    two seprate context for both themes and as well as user login, so whenever
    we required to provide multiple context we can provide by wrap another 
    context outside the components 
*/
