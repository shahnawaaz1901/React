/*
    DOM : DOM stands for Document Object Model, Where Document Refers to 
        HTML document file, Object reffers to the nodes or we can say tags 
        of that html document and model is the structure of that document.

    DOM Helps us to Represent the HTML document inside the Object.
*/

/*
    When Ever We fetch the element using the document.getElementById we 
    directly reffer to the DOM because we access elements using document 
    which reffers to the DOM, But in react we can't directly access the 
    DOM we access the DOM Virtually.
*/

/*
    Virtual DOM : Virtual DOM is a concept in Programming language which kept
            a copy of original DOM and when ever we make changes using ReactDOM
            changes will be reflected in Virtual DOM because VDOM synced with the
            real DOM so changes will be reflected in the HTML Document but Changing
            or Updating an Element using Virtual DOM is easy, fast and less memory
            consuming comparable to directly access DOM and Update element and
            VDOM is also kept in memory
*/

/*
    Working of RDOM and VDOM : Suppose we have an element tag div and inside div
            there are multiple children nodes like span, div and h1 and h2 and many
            other tags and whenever we made changes in parent div then all the 
            childrens are re-render which is not required and it's costly process
            because why we render those childrens when we not change something in
            the childrens, this can't achievable using plain javascript but can
            be achievable using react. Because react has the two DOM one is VDOM
            and another one is pre-updated VDOM and when ever we made changes using
            ReactDOM, reactDom update the pre-updated DOM and pre-updated DOM make
            changes visible in Real DOM withOut re rendering that node childrens 
            which is same as before. Maintaining the two tree of VDOM is also costly
            process but due to in memory process this changes made quickly and this
            trees and VDOM handled by the React internally so we dont need to taken 
            care about them.

*/
