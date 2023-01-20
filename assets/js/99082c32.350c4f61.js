"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10191],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||o;return t?n.createElement(h,i(i({ref:a},m),{},{components:t})):n.createElement(h,i({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39984:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));const o={title:"How to use Material UI Card Component",description:"We'll discover the Material UI (MUI) Card component with examples",slug:"material-ui-card",authors:"doro_onome",tags:["material-ui","react","mui","mui-card"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/material-ui-card",source:"@site/blog/2023-01-04-mui-card.md",title:"How to use Material UI Card Component",description:"We'll discover the Material UI (MUI) Card component with examples",date:"2023-01-04T00:00:00.000Z",formattedDate:"January 4, 2023",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"mui",permalink:"/blog/tags/mui"},{label:"mui-card",permalink:"/blog/tags/mui-card"}],readingTime:12.05,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Card Component",description:"We'll discover the Material UI (MUI) Card component with examples",slug:"material-ui-card",authors:"doro_onome",tags:["material-ui","react","mui","mui-card"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/social.png",hide_table_of_contents:!1},prevItem:{title:"The refine Open Source Hackathon",permalink:"/blog/refine-hackathon"},nextItem:{title:"How to Fetch Data in React with useSWR",permalink:"/blog/data-fetching-next-js-useswr"},relatedPosts:[{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi",formattedDate:"October 4, 2021",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:6.74,date:"2021-10-04T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.495,date:"2022-09-11T00:00:00.000Z"},{title:"React memo guide with examples",permalink:"/blog/react-memo-guide",formattedDate:"September 13, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.01,date:"2022-09-13T00:00:00.000Z"}],authorPosts:[{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.04,date:"2022-09-05T00:00:00.000Z"},{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.13,date:"2022-09-18T00:00:00.000Z"},{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.38,date:"2022-11-29T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting started with Material UI Card",id:"getting-started-with-material-ui-card",level:2},{value:"Other MUI Card Variants",id:"other-mui-card-variants",level:2},{value:"Image Cards",id:"image-cards",level:3},{value:"Outlined Cards",id:"outlined-cards",level:3},{value:"MUI Card Component Classes",id:"mui-card-component-classes",level:2},{value:"MUI Card Interactions",id:"mui-card-interactions",level:2},{value:"Building a simple Blog Layout with React and MUI Cards",id:"building-a-simple-blog-layout-with-react-and-mui-cards",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const p={toc:d};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Material UI cards are an important part of modern web design. They make it simple for users to access and interact with important information, whether text, images, or a combination of the two. Developers can use Material UI to easily create powerful and interactive cards that integrate seamlessly into their website design. This article will go over the various features, benefits, and applications of Material UI cards to give web developers a thorough understanding of how the component can help them create beautiful and engaging user experiences."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started-with-material-ui-card"},"Getting started with Material UI Card")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#other-mui-card-variants"},"Other MUI Card Variants"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#image-cards"},"Image Cards")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#outlined-cards"},"Outlined Cards")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mui-card-component-classes"},"MUI Card Component Classes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mui-card-interactions"},"MUI Card Interactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-a-simple-blog-layout-with-react-and-mui-cards"},"Building a simple Blog Layout with React and MUI Cards"))),(0,r.kt)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,r.kt)("p",null,"Material UI is a React-based UI framework designed to aid in the creation of consistent user interfaces across web and mobile applications. It includes a large library of components and tools to help developers easily create modern user interfaces."),(0,r.kt)("p",null,"It provides a comprehensive library of components and tools to help developers create modern user interfaces with ease. Some of which include:\nInput components\nSurface components\nData Display components\nNavigation components\nFeedback components\nLayout components"),(0,r.kt)("p",null,"The Material UI Card is an example of the MUI Surfaces."),(0,r.kt)("h2",{id:"getting-started-with-material-ui-card"},"Getting started with Material UI Card"),(0,r.kt)("p",null,"Cards contain information and actions about a single topic. Material UI cards are an excellent way to add a visually appealing, well-organized layout to a website quickly. They are simple to use and can be customized with various options such as colors, sizes, and images. To make a card, simply choose the card component from the Material UI library and customize it to your specifications. You can also add content to the card quickly, such as text, images, and buttons. Material UI cards are an excellent way to quickly improve the visual appeal and organization of a website."),(0,r.kt)("p",null,"Here\u2019a a demo of how to use MUI Cards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Card from '@mui/material/Card';\nimport CardActions from '@mui/material/CardActions';\nimport CardContent from '@mui/material/CardContent';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\n\nconst bull = (\n  <Box\n    component=\"span\"\n    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}\n  >\n    \u2022\n  </Box>\n);\n\nexport default function CardDemo() {\n  return (\n    <div style={{margin: '25%'}}>\n    <Card sx={{ maxWidth: 600 }}>\n      <CardContent>\n        <Typography variant='h3'  gutterBottom>\n          A Simple MUI Card\n        </Typography>\n        <Typography variant=\"h4\" component=\"div\">\n         Heading\n        </Typography>\n        <Typography sx={{ mb: 1.5 }} color=\"text.secondary\">\n          describes the heading\n        </Typography>\n        <Typography variant=\"body1\">\n          Card content\n          <br />\n          {'\"describes the content\"'}\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size=\"small\">Card Button</Button>\n      </CardActions>\n    </Card>\n    </div>\n  );\n}\n\n")),(0,r.kt)("p",null,"The code above represents a simple MUI Card component that is used to convey a message or specific information to users while they are browsing your web app. "),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/simple-mui-card.png",alt:"mui card"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Although cards can support multiple actions, UI controls, and an overflow menu, use caution and keep in mind that cards are gateways to more complex and detailed information. They should be simple to scan for relevant and actionable data. Text and images, for example, should be placed on them in a way that clearly indicates hierarchy."),(0,r.kt)("hr",null),(0,r.kt)(m,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"other-mui-card-variants"},"Other MUI Card Variants"),(0,r.kt)("h3",{id:"image-cards"},"Image Cards"),(0,r.kt)("p",null,"The image card is a more interactive card type. This card allows developers to include an image or icon, as well as a title and description. This makes it easier to convey a message to the user in a timely and effective manner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Card from '@mui/material/Card';\nimport CardActions from '@mui/material/CardActions';\nimport CardContent from '@mui/material/CardContent';\nimport CardMedia from '@mui/material/CardMedia';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\nimport Chevrolet from '../Images/Chevrolet.jpg'\n\nexport default function MediaCard() {\n  return (\n    <div style={{margin: '25%'}}>\n    <Card sx={{ maxWidth: 345 }}>\n      <CardMedia\n        component=\"img\"\n        height=\"140\"\n        image={Chevrolet}\n        alt=\"Chevrolet\"\n      />\n      <CardContent>\n        <Typography gutterBottom variant=\"h5\" component=\"div\">\n          Lizard\n        </Typography>\n        <Typography variant=\"body2\" color=\"text.secondary\">\n        Chevrolet is an iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size=\"small\">Share</Button>\n        <Button size=\"small\">Learn More</Button>\n      </CardActions>\n    </Card>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"The demo code above showcases how to use a card with an image to help reinforce the content. Here\u2019s the result:"),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/card-car.png",alt:"mui card"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"outlined-cards"},"Outlined Cards"),(0,r.kt)("p",null,"This variant of the Material UI Card is meant to be used when there is a need to reduce the prominence of the card, such as when it is part of a list of other cards. It has a thin border that outlines the card and a slightly less prominent title. Set variant=",(0,r.kt)("inlineCode",{parentName:"p"},"outlined")," to render an outlined card like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Card from '@mui/material/Card';\nimport CardActions from '@mui/material/CardActions';\nimport CardContent from '@mui/material/CardContent';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\n\nconst bull = (\n  <Box\n    component=\"span\"\n    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}\n  >\n    \u2022\n  </Box>\n);\n\nexport default function CardDemo() {\n  return (\n    <div style={{margin: '25%'}}>\n    <Card sx={{ maxWidth: 600 }} variant='outlined'>\n      <CardContent>\n        <Typography variant='h3'  gutterBottom>\n          An Outlined MUI Card\n        </Typography>\n        <Typography variant=\"h4\" component=\"div\">\n         Heading\n        </Typography>\n        <Typography sx={{ mb: 1.5 }} color=\"text.secondary\">\n          describes the heading\n        </Typography>\n        <Typography variant=\"body1\">\n          Card content\n          <br />\n          {'\"describes the content\"'}\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size=\"small\">Card Button</Button>\n      </CardActions>\n    </Card>\n    </div>\n  );\n}\n")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/outlined-card.png",alt:"mui card"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"mui-card-component-classes"},"MUI Card Component Classes"),(0,r.kt)("p",null,"The Material UI Card Component is an excellent tool for organizing and displaying data. It includes classes for creating card containers, card titles, card contents, card images, and card actions, among other things. These classes can be used to create cards with a distinct look and feel, making them more visually appealing and understandable. Furthermore, the Material UI Card Component supports a wide range of customization options, such as custom designs, color palettes, and other UI components."),(0,r.kt)("p",null,"Some of these classes include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Card />")," - This is the main card class used to create the card container.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<CardActionArea/>")," - This component  wraps children in a single Button, creating a ripple effect when clicked.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<CardActions/>")," - This is a flexbox component that adds 8px padding to the children and 8px horizontal padding between them.  It is used to add action buttons, such as \u2018Like\u2019 or \u2018Share\u2019, to the card.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<CardContent/>")," - This component places children inside a single ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element and adds 16px padding to all sides. If the child is the last one in the group, it also adds an additional 24px of padding at the bottom.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<CardHeader/>")," - This class is used to generate a header within the card, which is commonly used for titles, subtitles, or other headings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<CardMedia/>")," - This class is used to add a media element to the card, such as an image, video, or audio clip.   "))),(0,r.kt)("h2",{id:"mui-card-interactions"},"MUI Card Interactions"),(0,r.kt)("p",null,"MUI Card Interactions are a Material Design feature that allows users to interact with data quickly and easily. Users can quickly scan the data and decide what action to take by using cards with a title, content, and action. This results in a more fluid, intuitive user experience, as the user can quickly access and interact with the data without having to scroll or search for it. This feature also displays a visual representation of the data to the user, making it easier to digest and comprehend the information."),(0,r.kt)("p",null,"Consider the code below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Card from '@mui/material/Card';\nimport CardHeader from '@mui/material/CardHeader';\nimport CardContent from '@mui/material/CardContent';\nimport CardActions from '@mui/material/CardActions';\nimport Collapse from '@mui/material/Collapse';\nimport Avatar from '@mui/material/Avatar';\nimport IconButton, { IconButtonProps } from '@mui/material/IconButton';\nimport Typography from '@mui/material/Typography';\nimport { red } from '@mui/material/colors';\nimport FavoriteIcon from '@mui/icons-material/Favorite';\nimport ShareIcon from '@mui/icons-material/Share';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\nimport MoreVertIcon from '@mui/icons-material/MoreVert';\n\ninterface ExpandMoreProps extends IconButtonProps {\n  expand: boolean;\n}\n\nconst ExpandMore = styled((props: ExpandMoreProps) => {\n  const { expand, ...other } = props;\n  return <IconButton {...other} />;\n})(({ theme, expand }) => ({\n  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n  marginLeft: 'auto',\n  transition: theme.transitions.create('transform', {\n    duration: theme.transitions.duration.shortest,\n  }),\n}));\n\nexport default function RecipeReviewCard() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpandClick = () => {\n    setExpanded(!expanded);\n  };\n\n  return (\n    <div style={{margin: '25%'}}>\n    <Card sx={{ maxWidth: 345 }}>\n      <CardHeader\n        avatar={\n          <Avatar sx={{ bgcolor: red[500] }} aria-label=\"recipe\">\n            D\n          </Avatar>\n        }\n        action={\n          <IconButton aria-label=\"settings\">\n            <MoreVertIcon />\n          </IconButton>\n        }\n        title=\"Doro Onome Churchill\"\n        subheader=\"nomzykush@gmail.com\"\n      />\n      <CardContent>\n        <Typography variant=\"body2\" color=\"text.secondary\">\n        Front-end developer and Technical writer with keen attention to detail and a passion for delivering content as interactive as it is educational.\n        </Typography>\n      </CardContent>\n      <CardActions disableSpacing>\n        <IconButton aria-label=\"add to favorites\">\n          <FavoriteIcon />\n        </IconButton>\n        <IconButton aria-label=\"share\">\n          <ShareIcon />\n        </IconButton>\n        <ExpandMore\n          expand={expanded}\n          onClick={handleExpandClick}\n          aria-expanded={expanded}\n          aria-label=\"show more\"\n        >\n          <ExpandMoreIcon />\n        </ExpandMore>\n      </CardActions>\n      <Collapse in={expanded} timeout=\"auto\" unmountOnExit>\n        <CardContent>\n          <Typography paragraph>Chevrolet Description</Typography>\n          <Typography paragraph>\n          Chevrolet is an iconic American automobile brand founded in 1911 by Louis Chevrolet and William C. Durant\n          </Typography>\n          <Typography paragraph>\n          It is currently the fourth-largest automotive brand in the United States and is a division of General Motors. Chevrolet has become one of America\u2019s most iconic brands, producing reliable and stylish cars, trucks, and SUVs for over a century. Its models range from the economical Spark to the luxurious Corvette.\n          </Typography>\n          <Typography paragraph>\n          Chevrolet is also known for its commitment to safety, providing advanced features like lane departure warning and front crash prevention. (Discard any mussels that don&apos;t open.)\n          </Typography>\n        </CardContent>\n      </Collapse>\n    </Card>\n    </div>\n  );\n}\n\n")),(0,r.kt)("p",null,"The code above describes an interactive MUI Card component that allows users to click on one of its icons to reveal more information on a specific concept related to the content of the card."),(0,r.kt)("p",null,"Here\u2019s the result:"),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/first-gif.gif",alt:"mui card"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"building-a-simple-blog-layout-with-react-and-mui-cards"},"Building a simple Blog Layout with React and MUI Cards"),(0,r.kt)("p",null,"Using React and MUI Cards to create a simple blog layout is an excellent way to create an engaging blog page. React components are simple to use and customize, whereas MUI Cards are an excellent way to present content visually. React components make it simple to add posts and other content to the page, while MUI Cards style the content and make it more engaging."),(0,r.kt)("p",null,"Here\u2019s a simple illustration:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Card from '@mui/material/Card';\nimport CardHeader from '@mui/material/CardHeader';\nimport CardContent from '@mui/material/CardContent';\nimport CardActions from '@mui/material/CardActions';\nimport Collapse from '@mui/material/Collapse';\nimport Avatar from '@mui/material/Avatar';\nimport IconButton, { IconButtonProps } from '@mui/material/IconButton';\nimport Typography from '@mui/material/Typography';\nimport { blue } from '@mui/material/colors';\nimport FavoriteIcon from '@mui/icons-material/Favorite';\nimport ShareIcon from '@mui/icons-material/Share';\nimport ArrowForwardIcon from '@mui/icons-material/ArrowForward';\nimport MoreVertIcon from '@mui/icons-material/MoreVert';\n\ninterface ExpandMoreProps extends IconButtonProps {\n  expand: boolean;\n}\n\nconst ExpandMore = styled((props: ExpandMoreProps) => {\n  const { expand, ...other } = props;\n  return <IconButton {...other} />;\n})(({ theme, expand }) => ({\n  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n  marginLeft: 'auto',\n  transition: theme.transitions.create('transform', {\n    duration: theme.transitions.duration.shortest,\n  }),\n}));\n\nexport default function RecipeReviewCard() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpandClick = () => {\n    setExpanded(!expanded);\n  };\n\n  return (\n    <>\n\n    <div style={{margin: '5em', textAlign: 'center'}}>\n    <h1>Blog Layout</h1>\n    <h3>Some Kind of Title</h3>\n    </div>\n\n    <div style={{margin: '0 25%', display: 'flex', flexDirection: 'row', justifyContent: 'center', border: '1px solid #000', padding: '2em'}}>\n    <hr/>\n    <Card sx={{ maxWidth: 345 }} style={{marginRight: '5em'}} variant='outlined'>\n      <CardHeader\n        avatar={\n          <Avatar sx={{ bgcolor: blue[500] }} aria-label=\"recipe\">\n            B\n          </Avatar>\n        }\n        action={\n          <IconButton aria-label=\"settings\">\n            <MoreVertIcon />\n          </IconButton>\n        }\n        title=\"Blog Title\"\n        subheader=\"Blog Subtitle\"\n      />\n      <CardContent>\n        <Typography variant=\"body2\" color=\"text.secondary\">\n        Chevrolet is one of the most recognizable and popular car brands in the world. Founded in 1911 by Louis Chevrolet and William C. Durant, the brand has become a symbol of quality and reliability\n        </Typography>\n      </CardContent>\n      <CardActions disableSpacing>\n        <h4>Read More</h4>\n        <ExpandMore\n          expand={expanded}\n          onClick={handleExpandClick}\n          aria-expanded={expanded}\n          aria-label=\"show more\"\n       >\n         <ArrowForwardIcon/>\n        </ExpandMore>\n      </CardActions>\n      <Collapse in={expanded} timeout=\"auto\" unmountOnExit>\n        <CardContent>\n          <Typography paragraph>Chevrolet Description</Typography>\n          <Typography paragraph>\n          Chevrolet is an iconic American automobile brand founded in 1911 by Louis Chevrolet and William C. Durant\n          </Typography>\n          <Typography paragraph>\n          It is currently the fourth-largest automotive brand in the United States and is a division of General Motors. Chevrolet has become one of America\u2019s most iconic brands, producing reliable and stylish cars, trucks, and SUVs for over a century. Its models range from the economical Spark to the luxurious Corvette.\n          </Typography>\n          <Typography paragraph>\n          Chevrolet is also known for its commitment to safety, providing advanced features like lane departure warning and front crash prevention. (Discard any mussels that don&apos;t open.)\n          </Typography>\n        </CardContent>\n      </Collapse>\n    </Card>\n\n\n    <Card sx={{ maxWidth: 345 }}>\n      <CardHeader\n        avatar={\n          <Avatar sx={{ bgcolor: blue[500] }} aria-label=\"recipe\">\n            B\n          </Avatar>\n        }\n        action={\n          <IconButton aria-label=\"settings\">\n            <MoreVertIcon />\n          </IconButton>\n        }\n        title=\"Blog Title\"\n        subheader=\"Blog Subtitle\"\n      />\n      <CardContent>\n        <Typography variant=\"body2\" color=\"text.secondary\">\n        Chevrolet is one of the most recognizable and popular car brands in the world. Founded in 1911 by Louis Chevrolet and William C. Durant, the brand has become a symbol of quality and reliability\n        </Typography>\n      </CardContent>\n      <CardActions disableSpacing>\n        <h4>Read More</h4>\n        <ExpandMore\n          expand={expanded}\n          onClick={handleExpandClick}\n          aria-expanded={expanded}\n          aria-label=\"show more\"\n        >\n          <ArrowForwardIcon />\n        </ExpandMore>\n      </CardActions>\n      <Collapse in={expanded} timeout=\"auto\" unmountOnExit>\n        <CardContent>\n          <Typography paragraph>Chevrolet Description</Typography>\n          <Typography paragraph>\n          Chevrolet is an iconic American automobile brand founded in 1911 by Louis Chevrolet and William C. Durant\n          </Typography>\n          <Typography paragraph>\n          It is currently the fourth-largest automotive brand in the United States and is a division of General Motors. Chevrolet has become one of America\u2019s most iconic brands, producing reliable and stylish cars, trucks, and SUVs for over a century. Its models range from the economical Spark to the luxurious Corvette.\n          </Typography>\n          <Typography paragraph>\n          Chevrolet is also known for its commitment to safety, providing advanced features like lane departure warning and front crash prevention. (Discard any mussels that don&apos;t open.)\n          </Typography>\n        </CardContent>\n      </Collapse>\n    </Card>\n    </div>\n    </>\n  );\n}\n\n")),(0,r.kt)("p",null,"Here\u2019s the result: "),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-04-mui-card/second-gif.gif",alt:"mui card"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This article demonstrated the significance of Material UI in web applications. We discovered that MUI Cards are an effective way to present content in a visually appealing and user-friendly manner by describing its features, classes, and variants. They are simple to set up, offer numerous customization options, and can be used to provide a consistent user experience. We also investigated a possible application for MUI Cards in a simple Blog Page Layout. "),(0,r.kt)("p",null,"I hope you find this article valuable\nHappy Coding!"))}u.isMDXComponent=!0}}]);