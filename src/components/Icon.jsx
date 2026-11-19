const iconShapes = {
  code: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m9 9-3 3 3 3m6-6 3 3-3 3m-2-5-2 4" /></>,
  brain: <><path d="M12 4a3 3 0 0 0-5.8 1.1A3.5 3.5 0 0 0 5 11.6a3.5 3.5 0 0 0 2.2 6.1A3 3 0 0 0 12 20z" /><path d="M12 4a3 3 0 0 1 5.8 1.1 3.5 3.5 0 0 1 1.2 6.5 3.5 3.5 0 0 1-2.2 6.1A3 3 0 0 1 12 20zM8 9h2m4 0h2m-8 5h2m4 0h2m-4-10v16" /></>,
  cloud: <path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z" />,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  handshake: <><path d="m8 12 3 3a2 2 0 0 0 3 0l4-4" /><path d="m3 11 4-4 4 1 2-1 4 1 4 4-5 5-2-1-2 1-2-2-2 1-5-5Z" /><path d="m7 7-2-2-3 3 3 3m14-4 2-2 3 3-3 3" /></>,
  lightbulb: <><path d="M9 18h6m-5 4h4m-5-7a7 7 0 1 1 6 0c-.7.5-1 1.2-1 2h-4c0-.8-.3-1.5-1-2Z" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 5v2" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-13 5h18m-11 0v2h4v-2" /></>,
  chart: <><path d="M3 3v18h18M8 15l4-4 3 3 6-7" /><path d="M16 7h5v5" /></>,
  heart: <path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z" />,
  wallet: <><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M3 8h18m-5 5h5m-4 0h.01M7 5V3h10v2" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7.8a4 4 0 0 1 0 7.6m6 10v-2a4 4 0 0 0-3-3.9" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 9h6v6H9zM9 2v4m6-4v4m-6 12v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10.3a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.3 2.6Z" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
};

export default function Icon({ name, size = 24, className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconShapes[name]}
    </svg>
  );
}
