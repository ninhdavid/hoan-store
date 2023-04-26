import React, { createContext } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    children: React.ReactNode;
};
type ScrollContextType = {
    lastCardOutView: boolean;
    setLastCardOutView: React.Dispatch<React.SetStateAction<boolean>>;
    lastCardInView:boolean;
    setLastCardInView:React.Dispatch<React.SetStateAction<boolean>>
};

export const ScrollContext = createContext<ScrollContextType>({
    lastCardOutView: true,
    lastCardInView:false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLastCardInView:()=>{},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLastCardOutView: () => {},
});

const ScrollProvider = (props: Props) => {
    const [lastCardOutView, setLastCardOutView] = React.useState(true);
    const [lastCardInView, setLastCardInView] = React.useState(false);

    return (
        <ScrollContext.Provider value={{ lastCardOutView, setLastCardOutView,lastCardInView,setLastCardInView }}>
            {props.children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
