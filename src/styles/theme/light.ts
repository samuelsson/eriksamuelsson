import { colors } from '../index';
import Theme from './type';

const lightTheme: Theme = {
  body: {
    backgroundColor: colors.gray[100],
    color: colors.gray[800],
  },
  blockquote: {
    borderLeft: colors.gray[600],
    color: colors.gray[700],
    backgroundColor: colors.gray[200],
  },
  Footer: {
    borderTop: colors.gray[300],
    backgroundColor: colors.gray[200],
  },
  Navigation: {
    colorActive: colors.black,
    colorHover: colors.black,
  },
  PostHeader: {
    StyledTag: {
      color: colors.gray[700],
      backgroundColor: colors.gray[300],
      boxShadow: colors.gray[500],
      hoverBoxShadow: colors.gray[600],
    },
  },
  PostList: {
    borderBottom: colors.gray[400],
    bgHover: colors.gray[200],
  },
  PostMeta: {
    color: colors.gray[700],
  },
  TimeLine: {
    colorBorderRight: colors.gray[500],
  },
};

export default lightTheme;
