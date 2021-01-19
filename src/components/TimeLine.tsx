import React from 'react';
import styled, { css } from 'styled-components';
import { colors, mediaQueries } from '../styles';

interface AboutMeTimeLine {
  year: number;
  text: string;
}

type TimeLineProps = {
  timeLine: AboutMeTimeLine[];
};

const timeLineDot = css`
  position: absolute;
  left: 74px;
  top: calc(50% - 6px);
  background-color: ${colors.blue};
  border-radius: 50%;
  width: 12px;
  height: 12px;
  content: '';

  @media ${mediaQueries.medium} {
    left: 94px;
  }
`;

const TimelineTrace = css`
  position: absolute;
  top: 0;
  left: 79px;
  bottom: 0;
  border-right: solid 2px ${({ theme }) => theme.TimeLine.colorBorderRight};
  width: 0;
  content: '';

  @media ${mediaQueries.medium} {
    left: 99px;
  }
`;

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem;

  &:after {
    ${timeLineDot}
  }

  &::before {
    ${TimelineTrace};
  }

  &:last-of-type::before {
    bottom: 50%;
  }

  &:first-of-type::before {
    top: 50%;
  }
`;

const YearContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 60px;
  margin-right: 40px;
  font-weight: bold;
  text-align: right;

  @media ${mediaQueries.medium} {
    width: 80px;
  }
`;

const TimeLine = ({ timeLine }: TimeLineProps): JSX.Element => {
  return (
    <>
      {timeLine.map((date) => (
        <Item key={date.year + date.text}>
          <YearContainer>{date.year}</YearContainer>
          {date.text}
        </Item>
      ))}
    </>
  );
};

export default TimeLine;
