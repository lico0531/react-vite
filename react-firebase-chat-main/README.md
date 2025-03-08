<br/>
<br/>

<p align="center">
<img src="https://files.cloudtype.io/logo/cloudtype-logo-horizontal-black.png" width="50%" alt="Cloudtype"/>
</p>

<br/>
<br/>

# React + Tailwind CSS + Firebase 채팅 어플리케이션

React와 Tailwind CSS, Firebase를 활용한 채팅 어플리케이션 입니다.

## 🖇️ 준비 및 확인사항

### 지원 Node 버전
- 8, 10, 12, 14, 16, 18
- ⚠️ 로컬/테스트 환경과 클라우드타입에서 설정한 Node 버전이 상이한 경우 정상적으로 빌드되지 않을 수 있습니다.

### 패키지 명세
- 빌드 시 어플리케이션에 사용된 패키지를 설치하기 위해서는 `package.json`, `package-json.json`, `yarn.lock` 중 1개의 파일이 저장소에 반영되어 있어야합니다.

### Vite 설치
- Vite는 다양한 프론트엔트 프레임워크 혹은 라이브러리를 템플릿으로 지원하는 웹 개발 전용 빌드 도구 입니다. 본 예제에서는 Vite를 활용하여 React 어플리케이션을 구동하므로 사전에 설치가 필요합니다.
- **[Vite 공식문서로 이동](https://vitejs.dev/guide)**


## ⌨️ 명령어

### Build

```bash
npx vite build
```

### Start(Dev)

```bash
npx vite --port=[포트번호] # 기본값: 4000
```

## 🔥 Firebase

### Cloud Firestore 규칙
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow create, update, delete, write: if request.auth != null;
    }
  }
}
```


## 🏷️ 환경변수

- Firebase 프로젝트 생성 후 환경변수에 해당되는 값 입력 필요
- Vite로 관리되는 프로젝트에서 환경변수를 인식하도록 하려면 `VITE_[환경변수]`와 같은 양식으로 키 이름 설정이 필수이며, `import.meta.env.[환경변수 키]`와 같은 형식으로 값을 참조
  - `VITE_APP_API_KEY`
  - `VITE_APP_AUTH_DOMAIN`
  - `VITE_APP_PROJECT_ID`
  - `VITE_APP_STORAGE_BUCKET`
  - `VITE_APP_MESSSAGING_SENDER_ID`
  - `VITE_APP_APP_ID`


## 💬 문제해결

- [클라우드타입 Docs](https://docs.cloudtype.io/)

- [클라우드타입 FAQ](https://help.cloudtype.io/guide/faq)

- [Discord](https://discord.gg/U7HX4BA6hu)


## 📄 License

- [MIT](https://github.com/Timonwa/react-chat/blob/main/LICENSE.MD)


## 🗂️ Source

- [How to Build a Real-time Chat App with ReactJS and Firebase - freecodecamp.org](https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase//)
