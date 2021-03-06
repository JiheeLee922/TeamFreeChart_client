import OptionSelector from "components/GalleryExplore/OptionSelector";
import Pagination from "components/GalleryExplore/Pagination";
import ProjectGrid from "components/GalleryExplore/ProjectGrid";
import React, { Fragment } from "react";

import * as S from "./style";

const GalleryExplore = () => (
  <Fragment>
    <S.Layout>
      <S.TitleArea>
        <S.Title>프로젝트 갤러리 </S.Title>
        <S.Disc>이주의 인기 프로젝트입니다</S.Disc>
      </S.TitleArea>
      <OptionSelector />
      <ProjectGrid />
      <Pagination />
    </S.Layout>
  </Fragment>
);

// Home.propTypes = {};
export default GalleryExplore;
