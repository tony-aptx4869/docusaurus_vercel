import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import BrowserOnly from '@docusaurus/BrowserOnly'

export const Comment = () => {
  const colorMode = useColorMode().colorMode
  const currentLocale = useDocusaurusContext().i18n.currentLocale
  const giscusConfigs = {
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
    lang: 'zh-Hans',
    loading: 'lazy',
    theme: colorMode === 'dark' ? 'dark_tritanopia' : 'light_tritanopia',
    lang: currentLocale,
  }
  return (
    <div style={{ paddingTop: 69 }}>
      <BrowserOnly fallback={<div>Loading Comments...</div>}>
        {() => <Giscus {...giscusConfigs} />}
      </BrowserOnly>
    </div>
  );
};

export default Comment;
