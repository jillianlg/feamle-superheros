# female-superheros
React and SQL-Database

## LAB 09 Steps:

1) Modular API Fuctions (see add fetches commit): 
    Refactor api calls in a separate utils file. Make functions called makeItem, deleteItem, updateItem, and createItem that take appropriate input and hit your api.
### createItem:
        DONE Add Fetechs.js (ss1)
        DONE Move request from ListPage
        DONE import superagent
        DONE add catch(err)
        DONE In list page import fetch.js (ss2)
        DONE remove request import
###  DONE updateItem
    DONE refarctor GET request from CreatePage
    import fetch.js (ss3)
###  DONE refactor history.push 
    DONE move from CreatePage to fetch.js
    DONE import fetch.js (ss4)
###  DONE Add deleteItem function
    DONE import from fetch.js 
### DONE Add updateItem function
    DONE import from fetch.js 
###  add const URL 
    DONE on fetch.js add const URL and replce API with const (ss6) note: remove backslash

2) Add a Detail/Update page at <items>:id.
    On this page, there should be a form, pre-populated with the item's information.
    On submit, call your /PUT route to update this item, then route back to the home page.
    Delete button on detail/update page to delete item.
###  add Detail/Update page .js
    Add routre to App.js (ss7)
    Add DetailsPage and test browser (ss7-1)
    Start form on UpdatePage.js
    Add this.props.match... to Details page (ss8)
    Update state and and fetchPublishers (ss10)
    Update state and and fetchFemales (this.props.match.params)
    Update form on DetailsPage (ss9)
    Update in default evelFactor in state and componetMount (tie our form to fetch data)
    Set state for dropdown (to inniilize tor the state of the fetched female)
    Update form (for selected publisher === true) (ss11)
    Update state and formgit for publisherId (ss12)
3) Reroute to list using this.props.history.push('/')

4) Update Home/List page
    Add links on the Home/List page so that when you click on an item it takes you to the update page for that item.


