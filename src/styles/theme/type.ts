interface Theme {
  body: {
    backgroundColor: string;
    color: string;
  };
  blockquote: {
    borderLeft: string;
    color: string;
    backgroundColor: string;
  };
  Footer: {
    borderTop: string;
    backgroundColor: string;
  };
  Navigation: {
    colorActive: string;
    colorHover: string;
  };
  PostHeader: {
    StyledTag: {
      color: string;
      backgroundColor: string;
      boxShadow: string;
      hoverBoxShadow: string;
    };
  };
  PostList: {
    borderBottom: string;
    bgHover: string;
  };
  PostMeta: {
    color: string;
  };
  TimeLine: {
    colorBorderRight: string;
  };
}

export default Theme;
