
import clsx from 'clsx'

export default function Left({
  className,
}){
  return (
    <aside
      className={clsx(
        className,
      )}
    >
      <ul>
        <li>
          <h2 className="italic font-extralight text-slate-400">Class aptent taciti</h2>
          <ul>
            <li>Morbi sed ligula non</li>
            <li>Sed suscipit sodales efficitur</li>
            <li>Etiam volutpat</li>
            <li>Velit sed lacus gravida</li>
            <li>Teleifend</li>
          </ul>
        </li>
        <li>
          <h2 className="italic font-extralight text-slate-400">Sociosqu ad litora torquent</h2>
          <ul>
            <li className="text-2xl">Nulla sagittis accumsan pretium</li>
            <li>Phasellus sit amet posuere sapien</li>
            <li>Pretium efficitur</li>
            <li>Magna egestas viverra</li>
            <li>Nam fermentum est sit amet</li>
          </ul>
        </li>
        <li>
          <h2 className="italic font-extralight text-slate-400">Per conub</h2>
          <ul>
            <li>Sed sed massa in mauris</li>
            <li>Fend odio euismod</li>
            <li>Pretium efficitur</li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}
