---
title: Gatsby 기술 블로그 개발 후기
date: '2023-02-25T00:00:00Z'
thumbnail: ./gatsby.png
categories: dev 회고
---

첫 기술 블로그를 Gatsby로 만들면서 고민했던 내용들을 정리해보았습니다.<br /> 아직 개선할 점들이 많지만 블로그 운영에 필수적인 기능들을 우선적으로 구현하였으며 부족한 것들은 하나씩 개선해나갈 예정입니다. 😁

<br />

## 기술 블로그를 개설한 이유

많은 개발자들이 본인이 학습하거나 경험한 내용들을 다양한 형태의 블로그에 업로드하고 관리합니다. 물론 기록의 목적도 있겠지만 본인이 경험한 것들을 외부와 공유하고 본인이 어떤 개발자인지 알리는 목적으로도 많이 운영하고 있다고 생각합니다.

저 역시도 점점 늘어가는 학습량에 따라 경험하게 되는 것들에 대해 정리하고 기록할 필요성을 느끼고 블로그를 운영하기로 결정하였습니다.

<br />
<hr />

## Why Gatsby?

여러가지 선택지 중, React 기반의 Static Site Generator인 [Gatsby](https://www.gatsbyjs.com/)를 활용하여 블로그를 만들게 되었습니다. 물론 velog, medium과 같은 기존 블로그 서비스를 활용하거나 Next.js, jekyll와 같은 다른 선택지도 있었지만 Gatsby가 제공하는 다양한 장점들을 활용하여 나만의 블로그를 직접 만들어보고자 했습니다.

#### 1. 익숙한 React 기반

가장 많이 사용하는 React를 그대로 활용하여 React의 여러 장점들을 그대로 가져갈 수 있다는 장점이 있습니다.

#### 2. JAMStack 아키텍쳐

> JAMStack: J (JavaScript) + A (API) + M (Markup)

Gatsby는 JAMStack 아키텍쳐 기반의 프레임워크로 pre-render된 마크업 파일을 CDN(Content Delivery Network)을 통해 제공하는데 이로 인해 더 빠르게 웹사이트를 제공할 수 있으며, 서버 관리도 최소화할 수 있습니다.

#### 3. 다양한 plugin의 활용성

Gatsby가 제공하는 다양한 plugin의 이점을 채택하여 가장 빠르게 기본적으로 필요한 기능들을 구현할 수 있습니다.
`gatsby-transformer-remark`와 같은 plugin은 마크다운 문법을 html 형태로 파싱해주는 역할을 수행해 손쉽게 포스트들을 생성해낼 수 있으며, `gatsby-plugin-image`는 lazy loading 등의 이미지 최적화 작업을 도와줍니다.

#### 4. GraphQL

각각의 엔드포인트에서 고정된 데이터를 받을 수 있는 REST API와 다르게 단일 엔드포인트에서 화면 구성에 필요한 데이터들만 받아와 사용할 수 있으며 Gatsby에서는 페이지 또는 Static Query 컴포넌트에서 필요한 데이터들을 조회하는 역할으로 사용됩니다 . 평소에 GarphQL에 대한 궁금증을 가지고 있었어서 이번 기회에 간단하게나마 접해볼 수 있다는 점이 Gatsby를 선택하는 이유 중 하나가 되었습니다.

<br />
<hr />

## 만들면서 고려한 것들

### 1. UI 디자인

디자인에 대한 견해가 넓진 않기 때문에 다양한 레이아웃을 가진 여러 기술 블로그들을 찾아보면서 제가 원하는 UI를 적절하게 만들어갔습니다.
아직 다듬어야 할 점들도 있어서 추가적인 기능들을 덧붙여가면서 조금씩 개선해 나갈 예정입니다. 아래 링크들은 블로그를 만들면서 제가 참고했던 블로그들입니다.

- https://jbee.io
- https://bepyan.github.io
- https://www.jeong-min.com
- https://blog.chayeoi.site

<br />

### 2. 다크모드

다크모드 기능은 어떻게 보면 부수적인 기능일 수 있겠지만 블로그를 직접 구현하기로 결정한 순간부터 추가하고 싶었던 기능이였고 그만큼 많은 신경을 써서 구현하였습니다.
처음에 다크모드들 구상하면서는 현재 사용 중인 css 라이브러리인 **emotion**의 도움을 받아 `ThemeProvider`의 theme을 스위치하는 정도로 가볍게 생각했습니다. 하지만 실제로 구현해보면서 예상치 못한 이슈를 발견하게 되어 구현하는데 시간이 생각보다 많이 소요되었습니다.

#### 적절한 컬러 조합

[Materia Design](https://m2.material.io/design/color/dark-theme.html)의 가이드를 참고하면서 적절한 다크 모드에 대한 컬러 palette를 정해보았으나 컬러 조합은 아직 조정 중이며 더 나은 조합을 찾게 되면 수정해볼 생각입니다.

<br />

#### theme 설정 유지하기

```typescript
const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>('light')

  useLayoutEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as ThemeType | null
    if (storedTheme !== null) {
      setTheme(storedTheme)
    } else {
      const systemDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
      setTheme(systemDarkTheme.matches ? 'dark' : 'light')
    }
  }, [])

  ...
}
```

<br />

화면을 새로고침할 경우나 블로그에 재방문하였을 경우에도 사용자가 설정한 컬러 모드를 유지시켜야 하는 이슈가 발생하였습니다. 해당 이슈를 해결하기 위해 `localStorage`를 활용하여 테마 설정 정보를 저장하고 활용할 수 있도록 구현하여 해결할 수 있었습니다. 또한, `prefers-color-scheme`을 통해 사용자의 시스템 테마 정보를 가저와 테마의 초기 설정까지 함께 구현하였습니다. 그러나 이렇게 테마를 유지시키기 위해 구현했던 방식이 아래의 이슈를 발생시켰습니다.

<br />

#### FoUC (Flash of Unstyled Contents) 이슈

Gatsby는 build time에 HTML 파일을 생성하며 js가 로드된 이후에 hydration이 일어나는 과정을 통해 렌더링됩니다. 그리고 빌드 타임에는 js가 로드되지 않아 `localStorage`에 접근하지 못하기 때문에 저장된 테마를 불러오지 못하게 되어 `useTheme`에 default로 설정된 light theme이 초기 테마로 적용됩니다. 이로 인해 다크 테마로 저장되어 있는 경우 `localStorage`에서 테마를 가져오기 전까지는 light theme이 노출되면서 일시적인 깜빡임 현상이 발생하게 됩니다.

이러한 문제를 해결하기 위해 `gatsby-ssr.tsx` 내에서 빌드되는 HTML에 접근하여 `localStorage`의 theme 정보를 가져와 임시적으로 body tag에 **dark class property** 를 삽입해주었습니다.

```typescript
//gatsby-ssr.tsx

const applyDarkModeClass = `
(function() {
  try {
    const mode = localStorage.getItem('theme');
    if (mode === 'dark') {
		document.body.classList.add('dark');
	} else if(mode === null) {
      const systemMode = window.matchMedia('(prefers-color-scheme: dark)');
      if(systemMode.matches) {
        document.body.classList.add('dark');
      }
    }
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }: RenderBodyArgs) => {
  const script = createElement('script', {
    key: 'darkmode',
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  })
  setHtmlAttributes({ lang: `en` })
  setPreBodyComponents([script])
}
```

<br />

그리고 `GlobalStyles`에는 dark class에 대한 컬러를 설정해주고 컴포넌트 마운팅이 끝난 이후엔 원래대로 `useTheme`의 theme state가 사용되기 때문에 body에 삽입했던 dark class는 제거합니다.

```typescript
// GlobalStyles.tsx

const style = (theme: Theme) => css`
    ...

    body.dark {
        background-color: ${darkTheme.palette.bgColor};
        color: ${darkTheme.palette.mainTextColor};

        ...
    }
`
```

```typescript
// ThemeProvider.tsx

useEffect(() => {
  document.body.classList.remove('dark')
}, [])
```

<br />

#### utterances 다크모드 지원

[utterances](https://utteranc.es/)는 post들의 커멘트 기능을 위해 사용 중인데, utterances도 컬러 모드를 선택하여 테마를 적용시킬 수 있도록 지원하고 있습니다. 하지만 컬러 모드가 변경될 경우엔 `iframe` 형태의 커멘트 ui에 스위칭된 테마가 업데이트되지 않아 초기에 설정된 테마로 유지되는 것이 어색하게 느껴졌습니다. 그래서 이를 해결하기 위해 알아보던 중 utterances의 theme을 동적으로 변경하는 방법을 파악하게 되어 아래와 같이 utterances iframe에 `postMessage` 메소드로 theme을 전달하여 utterances의 ui도 함께 컬러 모드가 변경되도록 하였습니다.

```typescript
useEffect(() => {
  const { pathname } = document.location
  if (utteranceExludedPath.includes(pathname)) return

  const message = {
    type: 'set-theme',
    theme: theme === 'light' ? LIGHT_THEME : DARK_THEME,
  }

  const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')

  const value = localStorage.getItem('theme') as ThemeType

  if (iframe && value) {
    iframe.contentWindow?.postMessage(message, 'https://utteranc.es')
  }
}, [theme])
```

<br />

### 3. 애니메이션

[Framer Motion](https://www.framer.com/motion/)을 활용하여 약간의 애니메이션 효과를 추가하였습니다.
아래와 같이 사용할 애니메이션에 대한 variants를 정의하고 initial, animate와 같은 간단한 props 설정만으로도 다양한 애니메이션 효과를 줄 수 있습니다.

```typescript
// animation.ts

import { Variants } from 'framer-motion'

export const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.6 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6 },
  },
}
```

<br />

### 4. 그 외 추가 기능들

- utterances 커멘트 기능
- about page (resume)
- image optimization w/ `gatsby-plugin-image`

<br />
<hr />

## Todo

- TOC 기능
- pagination or inifinte scroll
- 검색엔진 최적화
- 포스트 검색 기능
- PWA 지원

<br />
<hr />

## 마치며

Gatsby를 활용하여 직접 만들어보는 것으로 저의 첫 블로그 운영이 시작되었는데 처음 접해보는 기술로 하나의 작은 프로젝트를 끝낸 기분이 들어서 나름 뿌듯하고 한편으로는 앞으로 적어나갈 글들에 대한 걱정이 생기기도 합니다. 무작정 기록을 남기는데에 집중하지 않고 확실하게 학습한 내용을 바탕으로 정확한 정보를 가진 글을 올릴 수 있도록 노력해야겠다는 생각이 듭니다. 아직 부족한 점이 많지만 앞으로 같은 길을 걸어가는 개발자분들에게 조금이나마 도움이 될 수 있는 포스팅을 할 수 있도록 열심히 공부하면서 블로그를 잘 운영해보도록 하겠습니다.
