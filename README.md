# Easy car Rental System App

This project is a web application for displaying and filtering car products.

The use of mockup images can also help improve user experience as it provides context to the content being displayed on the website, making it easier for users to understand the purpose of the website and navigate its pages.

# Project tree

    src
    ┣ components                  # A directory containing the reusable UI components used in the project
    ┃ ┣ CarProductCard.js         # A component to display a card for each car product
    ┃ ┣ Error.js                  # A component to handle and display errors in the project
    ┃ ┣ FilterSection.js          # A component for filtering car products
    ┃ ┣ Header.js                 # A component for the header of the project
    ┃ ┣ Layout.js                 # A component for the layout of the project
    ┃ ┣ Loading.js                # A component for loading indicators in the project
    ┃ ┣ NoCar.js                  # A component to display when no cars are found based on the filter criteria
    ┃ ┗ TableSection.js           # A component for displaying the car products in a table format
    ┣ hooks                       # A directory containing custom hooks used in the project
    ┃ ┣ useCurrentPageName.js     # A hook to track the current page name
    ┃ ┗ useHorizontalScroll.js    # A hook for handling horizontal scrolling
    ┣ images
    ┣ pages                       # A directory containing the pages of the project
    ┃ ┣ CarList.js                # A page for displaying a list of car products
    ┃ ┗ Home.js                   # The home page of the project
    ┣ .DS_Store
    ┣ App.css                     # A stylesheet for the entire UIs.
    ┣ App.js
    ┣ App.test.js
    ┣ index.css
    ┣ index.js
    ┣ reportWebVitals.js
    ┗ setupTests.js

---
## local에서 json-server 실행 방법

```
json-server db.json --routes routes.json --port 8080
```

## api url

-   차량 전체 리스트: `http://localhost:8080/carClasses`
-   차량 상세 정보: `http://localhost:8080/carClasses/${carClassId}`
