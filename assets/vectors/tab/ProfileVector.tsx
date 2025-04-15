import Svg, { Path } from "react-native-svg";

const ProfileVector = ({ isFocus }: { isFocus: boolean }) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M21.9538 20.3437C21.8825 20.4673 21.7799 20.5698 21.6564 20.6411C21.5328 20.7125 21.3927 20.75 21.25 20.75H1.75001C1.60745 20.7498 1.46745 20.7122 1.34405 20.6408C1.22065 20.5694 1.1182 20.4668 1.04699 20.3433C0.975772 20.2199 0.938303 20.0798 0.938339 19.9373C0.938376 19.7947 0.975917 19.6547 1.04719 19.5312C2.59399 16.8571 4.97766 14.9396 7.75946 14.0306C6.38346 13.2114 5.31439 11.9633 4.71643 10.4777C4.11847 8.99218 4.02469 7.35143 4.44948 5.80743C4.87427 4.26343 5.79415 2.90156 7.06785 1.93096C8.34155 0.960356 9.89864 0.434692 11.5 0.434692C13.1014 0.434692 14.6585 0.960356 15.9322 1.93096C17.2059 2.90156 18.1257 4.26343 18.5505 5.80743C18.9753 7.35143 18.8815 8.99218 18.2836 10.4777C17.6856 11.9633 16.6166 13.2114 15.2406 14.0306C18.0224 14.9396 20.406 16.8571 21.9528 19.5312C22.0243 19.6546 22.062 19.7947 22.0622 19.9373C22.0624 20.0799 22.025 20.2201 21.9538 20.3437Z"
        fill={!isFocus ? "#747785" : "#FF6B57"}
      />
    </Svg>
  );
};

export default ProfileVector;
