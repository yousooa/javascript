function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async : promise의 resolve를 수행한 결과
async function helloAsync() {
  return delay(3000).then(() => {
    return 'Hello Async';
  });
}
helloAsync().then((res) => {
  console.log(res);
});

// 위 코드 await 이용해서 바꾸기
// await는 async 함수 안에서만 동작
// promise가 처리될 때까지 함수 실행을 기다리게 만든다. -> promise가 처리되는 동안 다른 일을 할 수 있기 때문에 cpu 리소스가 낭비되지 않음
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
// async 함수에서 return한 값은 then이나 await으로 받아야 함
async function helloAsync() {
  await delay(3000); // delay 함수가 이행될 때까지 기다림
  return 'Hello Async';
}

async function main() {
  console.log(await helloAsync());
}

main();

// async함수에서 promise를 실패하는 경우 try catch로 처리
