seb44_pre_035

### Contributors
| 민정호  | 이정원 | 이현지 | 김현우 | 허웅 | 조승아| 
| :-----------------------------------: | :-----------------------------------: | :----------------------------------: | :----------------------------------: | :------------------------------------: | :-------------------------------------: |
|             FE<br>  팀장            |                  FE                   |                  FE                  |                  BE<br>(부팀장)                  |                   BE                   |                   BE                    |
  
##   📃 폴더 구조
Frontend
`public`: 정적 파일

`eslintrc.json`: 코드 규칙 명시

`prettierrc.json`: 코드 작성 규칙 명시

`package.json`: 핵심 파일

`src`: 소스 코드
- components: 컴포넌트
- hooks: 사용자 정의 훅
- share: 페이지 전체 레이아웃(Footer,Header, SideBar, Nav)
- pages: 페이지 컴포넌트
- features: redux-toolkit을 정의 폴더
- style: GlobalStyle, theme 등 전역 스타일드 컴포넌트


```
├─client
│  ├─public
│  ├─eslintrc.json
│  ├─prettierrc.json
│  ├─package.json
│  └─src
│      ├─components
│      ├─hooks
│      └─share
│      │   ├─Footer
│      │   ├─Header       
│      │   ├─SideBar
│      │   └─Nav
│      ├─pages
│      └─app
│      ├─features
│      ├─style  
│           
```
# Commit rule

|  이름 | 내용|
|:----------|:----------|
| feat | 새로운 기능을 추가할 경우|
| fix|	버그를 고친 경우| 
| refactor | 리팩토링| 
| design | css, UI 수정| 
| docs | 	문서를 수정한 경우| 
| style |	코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우| 
| test | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)| 
| chore	 | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)| 
| rename	 | 	파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우| 
| remove	 | 파일을 삭제하는 작업만 수행한 경우| 
| comment| 필요한 주석 추가 및 변경 | 
