import React from 'react';
import Pagination from './components/Pagination';
import LatestIssues from './LatestIssues';
import IssueSummary from './IssueSummary';
import prisma from '@/prisma/client';
import IssueChart from './IssueChart';

const Home = async () => {
  const open = await prisma.issue.count({ where: { status: 'OPEN' } });
  const inProgress = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' },
  });
  const closed = await prisma.issue.count({ where: { status: 'CLOSED' } });
  return <IssueChart open={open} inProgress={inProgress} closed={closed} />;
};

export default Home;
