// import { css } from "@emotion/css"
// import { Flex } from "antd"

// const classes = {
//   header: css({
//     height: 70,
//     background: 'rgba(255, 255, 255, 0.8)'
//   })
// }

// export const NavHeader = () => {
//   return (
//     <Flex align="center" className={classes.header} >
//       header111
//     </Flex>
//   )
// }


// import { RootContainer } from "@/components/root";
// import { css } from "@emotion/css";
// import { Flex, Layout } from "antd";
// import { NavHeader } from './nav'
// import { Outlet } from "react-router-dom";

// const classes = {
//   layout: css({
//     height: '100vh',
//     display: 'grid',
//     gridTemplateRows: '70px 1fr'
//   })
// }

// export const OutletLayout = () => {
//   return (
//     <RootContainer style={{
//       position: 'relative'
//     }} >
//       <Layout className={classes.layout} >
//         <NavHeader/>
//         <div>
//           <Outlet/>
//         </div>
//       </Layout>
//     </RootContainer>
//   )
// }