import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { useGetCollections } from "@/api/minting_deployer";
import Card from "@/components/Card";
import EmptyGameCard from "@/components/EmptyGameCard";
import { ErrorResult, LoadingResult, NoDataResult } from "@/components/Results";
import Button from "@/components/ui/Button";
import H1 from "@/components/ui/H1";
import Space from "@/components/ui/Space";
import { navPaths } from "@/shared";

const Nfts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: collections = [], isLoading, isError } = useGetCollections();

  return (
    <>
      <Button
        size="big"
        rightArrow
        onClick={() => navigate(`${navPaths.manage_nfts_new}`)}
      >
        {t("manage_nfts.button")}
      </Button>
      <H1>{t("manage_nfts.title")}</H1>

      {isLoading ? (
        <LoadingResult>{t("manage_nfts.loading")}</LoadingResult>
      ) : isError ? (
        <ErrorResult>{t("error")}</ErrorResult>
      ) : collections.length ? (
        <>
          <div className="card-container">
            {collections.map(({ canister_id, name }) => (
              <Card
                type="collection"
                key={canister_id}
                icon={<Cog8ToothIcon />}
                title={name}
                canisterId={canister_id}
                showCycles
                noImage
                onClick={() =>
                  navigate(`${navPaths.manage_nfts}/${canister_id}`)
                }
              />
            ))}
            <EmptyGameCard length={collections.length} />
          </div>
        </>
      ) : (
        <NoDataResult>{t("manage_nfts.no_collections")}</NoDataResult>
      )}
    </>
  );
};

export default Nfts;
