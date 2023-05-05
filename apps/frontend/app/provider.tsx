"use client";

// import { reduxWrapper } from '@/redux/store/store';
// import { Provider } from 'react-redux';


// export function Providers({children,...rest}:{children: React.ReactNode}){
//     const { store} = reduxWrapper.useWrappedStore(rest);

//     return <Provider store={store}>{children}</Provider>
// }


import { store } from '@/redux/store/store';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
//   const { store } = reduxWrapper.useWrappedStore(rest);
//   const router = useRouter();

  // Nếu `router` chưa được khởi tạo, thì render một component rỗng để khởi tạo nó.
//   if (!router) {
//     return <></>;
//   }

  return <Provider store={store}>{children}</Provider>;
}
