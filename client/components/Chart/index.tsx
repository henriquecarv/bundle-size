import { BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts';
import IVersionSize from '../../interfaces/IVersionSize';
import { styles } from './styles';
import { useWindowWidth } from '@react-hook/window-size';

interface IProps {
  data: IVersionSize[];
}

export default function ({ data }: IProps) {
  const windowWidth = useWindowWidth();
  const chartWidth = windowWidth < 768 ? 250 : 500;

  return (
    <>
      <BarChart width={chartWidth} height={300} data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="min" stackId="a" fill="#8884d8" unit=" kB" />
        <Bar dataKey="gzip" stackId="a" fill="#82ca9d" unit=" kB" />
      </BarChart>
      <style jsx>{styles}</style>
    </>
  );
}
