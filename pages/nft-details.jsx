import { NextSeo } from 'next-seo';
import DashboardLayout from 'layouts/_dashboard';
import NftDetails from '/components/nft/nft-details';
import { nftData } from 'data/static/single-nft';
export const getStaticProps = async () => {
    return {
        props: {},
    };
};
const NFTDetailsPage = () => {
    return (<>
      <NextSeo title="NFT details" description="Map3 - React Next Web3 NFT Crypto Dashboard Template"/>
      <DashboardLayout contentClassName="!pb-0">
        <NftDetails product={nftData}/>
      </DashboardLayout>
    </>);
};
export default NFTDetailsPage;
