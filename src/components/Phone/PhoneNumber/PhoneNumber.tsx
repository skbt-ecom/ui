type PhoneNumberProps = {
  number?: string;
  className?: string;
};

const PhoneNumber = ({ number, className }: PhoneNumberProps) => (
  <a rel="nofollow" href={`tel:${number}`} className={className}>
    {number}
  </a>
);

export default PhoneNumber;
