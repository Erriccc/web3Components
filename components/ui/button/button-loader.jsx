import Loader from '/components/ui/loader';
export default function ButtonLoader({ size, variant, }) {
    return (<span className="absolute inset-0 h-full w-full flex items-center justify-center">
      <Loader tag="span" size={size} variant={variant} showOnlyThreeDots={true}/>
    </span>);
}
ButtonLoader.displayName = 'ButtonLoader';
