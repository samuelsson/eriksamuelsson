import { colors } from '../index';
import Theme from './type';

const darkTheme: Theme = {
  body: {
    backgroundColor: colors.gray[800],
    color: colors.gray[600],
  },
  blockquote: {
    borderLeft: colors.gray[700],
    color: colors.gray[600],
    backgroundColor: colors.gray[900],
  },
  Footer: {
    borderTop: colors.black,
    backgroundColor: colors.gray[900],
  },
  Navigation: {
    colorActive: colors.gray[400],
    colorHover: colors.gray[400],
  },
  PostHeader: {
    StyledTag: {
      color: colors.gray[500],
      backgroundColor: colors.gray[900],
      boxShadow: colors.gray[900],
      hoverBoxShadow: colors.gray[900],
    },
  },
  PostList: {
    borderBottom: colors.gray[900],
    bgHover: colors.gray[900],
  },
  PostMeta: {
    color: colors.gray[500],
  },
  TimeLine: {
    colorBorderRight: colors.gray[900],
  },
};

export default darkTheme;
