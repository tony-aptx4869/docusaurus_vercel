import React from 'react';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import BrowserOnly from '@docusaurus/BrowserOnly'
import Giscus from '@giscus/react'


export const Comment = () => {
  const themeConfig = useThemeConfig()
  const { i18n } = useDocusaurusContext()
  const giscusConfig = {
    id: 'comments',
    repo: 'tony-aptx4869/docusaurus_vercel',
    repoId: 'R_kgDOKYc1NA',
    category: 'General',
    categoryId: 'DIC_kwDOKYc1NM4CZoiz',
    mapping: 'pathname',
    strict: '1',
    term: 'Comments Powered by giscus.',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: 'light_tritanopia',
    darktheme: 'dark_tritanopia',
    lang: 'zh-Hans',
    loading: 'lazy',
  }
  giscusConfig.theme = useColorMode().colorMode === 'dark' ? giscusConfig.darktheme : giscusConfig.theme
  giscusConfig.lang = i18n.currentLocale
  return (
    <div style={{ paddingTop: 100 }}>
      <BrowserOnly fallback={<div>Loading Comments...</div>}>
        {() => <Giscus {...giscusConfig} />}
      </BrowserOnly>
    </div>
  );
};

export default Comment;
