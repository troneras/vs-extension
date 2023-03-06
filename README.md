# Chrome extension with Vue3 + Tailwind + Vuetify 
This is a very powerful start point for a chrome extension. 
- Vue3
- Vuetify
- Tailwind

Also demonstrates how to fetch data from a server and how communication from popup, background and content scripts work (Check the log functionality)
- Sample functionality:
![image](https://user-images.githubusercontent.com/1836450/222999308-86300b73-0967-4308-a7df-6adad0abb66f.png)

![image](https://user-images.githubusercontent.com/1836450/221446050-239d9e47-875f-4051-90d5-03cde3f4f159.png)

* Check logs on the site. (normally logs doesn't appear on the website console, but on the context of the extension, this is an added functionality)
![image](https://user-images.githubusercontent.com/1836450/221446175-dc61aeb9-3337-4a07-a99b-9c9049f329ff.png)
![image](https://user-images.githubusercontent.com/1836450/222999369-f49916b0-b0c2-4dcd-87f8-0a3e9d02345f.png)
![image](https://user-images.githubusercontent.com/1836450/222999447-e9de3231-a3ec-4ef3-b1ad-810b77cdc331.png)
![image](https://user-images.githubusercontent.com/1836450/222999508-8e943104-cf05-4cc9-9072-a04d4e4f63e9.png)
![image](https://user-images.githubusercontent.com/1836450/222999532-afe3d3d5-c294-41cd-a988-e1cd9a657aa7.png)
![image](https://user-images.githubusercontent.com/1836450/222999561-1af27044-1ca0-4df5-a0e6-ff72811f6fc8.png)
![image](https://user-images.githubusercontent.com/1836450/222999861-279c6f3e-2495-40b6-986e-ccebbdb66d96.png)


## Project setup
```
npm install -g json-server
npm install
```

### Compiles and hot-reloads for development
In one terminal start the mock API that serves some quotes:
```
cd mock-api
json-server --watch quotes.json
```

Compiles and hot-reloads for development
```
npm run build-watch
```

### Install dist folder as chrome extension 
- chrome://extensions/

- Make sure you are in Developer mode

- Import uncompress extension

- Test on a tab that has a real website URL (google.com for example), otherwise the background script wont be able to communicate with the content.
