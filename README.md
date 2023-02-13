# SOCAR Rental System App

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
    ┣ App.css                     # A stㅁylesheet for the entire UIs.
    ┣ App.js
    ┣ App.test.js
    ┣ index.css
    ┣ index.js
    ┣ reportWebVitals.js
    ┗ setupTests.js

---

## 주의사항

-   🔥 **최종 코드 제출은 main 브랜치에 올려주세요. main 브랜치에 merge가 안되어 있으면 불합격 입니다.** 🔥
-   🔥 **node.js 버전은 최소 16이상 ~ LTS 버전(현재 18.12.0)을 사용해주세요.** 🔥

## 참고

-   🔥 **기존 환경설정에 변경이 있거나 구현하신 내용에 설명이 필요할 시 README.md에 기재 부탁드립니다.** 🔥

## 기술스택

-   React
-   JavaScript or TypeScript
    -   TypeScript 사용 시
    ```
      npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    ```
-   상태관리는 필요하다면 외부 패키지(redux, mobx, recoil, zustand, jotai 등) 사용 가능
-   그 외 ui, event관련 패키지 (modal, chip button, scroll, animation등) 사용불가
-   styling을 위한 css-in-js(styled-component, emotion 등) 형태의 패키지는 사용가능
-   라우팅을 위해 react-router는 사용가능

## 과제 내용

-   안내 메일에 첨부되어 있는 문서링크

## local에서 json-server 실행 방법

```
json-server db.json --routes routes.json --port 8080
```

## api url

-   차량 전체 리스트: `http://localhost:8080/carClasses`
-   차량 상세 정보: `http://localhost:8080/carClasses/${carClassId}`
