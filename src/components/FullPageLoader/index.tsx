import { LoaderWrapper, Spinner } from "./styles";

interface FullPageLoaderProps {
  fadeOut: boolean;
  onTransitionEnd?: () => void;
}

export const FullPageLoader = ({
  fadeOut,
  onTransitionEnd,
}: FullPageLoaderProps) => {
  return (
    <LoaderWrapper
      $fadeOut={fadeOut}
      onTransitionEnd={onTransitionEnd}
      aria-hidden={fadeOut}
    >
      <Spinner />
    </LoaderWrapper>
  );
};
