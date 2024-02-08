import clsx from 'clsx'
import Hive from './logos/hive.svg'
import ZooKeeper from './logos/zookeeper.svg'
import Hadoop from './logos/hadoop.svg'
import Hbase from './logos/hbase.svg'
import Knox from './logos/knox.svg'
import Ranger from './logos/ranger.svg'
import Spark from './logos/spark.svg'
import Phoenix from './logos/phoenix.svg'
import Nifi from './logos/nifi.svg'
import Kafka from './logos/kafka.svg'
import Livy from './logos/livy.svg'
import Airflow from './logos/airflow.svg'

export default function TdpComponents() {
  return (
    <div
      className={clsx(
        'grid grid-cols-5 md:grid-cols-10 gap-6 xs:gap-10',
        'my-12 mx-auto w-full max-w-5xl px-10',
      )}
    >
      {[
        // {
        //   title: 'Airflow',
        //   svg: <Airflow />,
        // },
        {
          title: 'Kafka',
          svg: <Kafka />,
        },
        // {
        //   title: 'Nifi',
        //   svg: <Nifi />,
        // },
        {
          title: 'Phoenix',
          svg: <Phoenix />,
        },
        {
          title: 'Livy',
          svg: <Livy />,
        },
        {
          title: 'ZooKeeper',
          svg: <ZooKeeper />,
        },
        {
          title: 'Hive',
          svg: <Hive />,
        },
        {
          title: 'Spark',
          svg: <Spark />,
        },
        {
          title: 'Ranger',
          svg: <Ranger />,
        },
        {
          title: 'Knox',
          svg: <Knox />,
        },
        {
          title: 'Hadoop',
          svg: <Hadoop />,
        },
        {
          title: 'HBase',
          svg: <Hbase />,
        },
      ].map((logo) => (
        <div
          title={logo.title}
          key={logo.title}
          className={clsx(
            'flex items-center justify-center',
            'rounded-full bg-white/90 aspect-square p-2',
            // 'ring-1 ring-offet-2',
            'ring-offset ring-offset-4 ring-offset-slate-900',
            'ring-1 ring-[#009491]',
            // '[&_svg]:h-20 [&_svg]:w-full',
          )}
        >
          {logo.svg}
        </div>
      ))}
    </div>
  )
}
