import { useTranslation } from "react-i18next";
import Form from "@/components/form/Form";
import Button from "@/components/ui/Button";
import H1 from "@/components/ui/H1";
import Input from "@/components/ui/Input";
import Space from "@/components/ui/Space";
import TextArea from "@/components/ui/TextArea";
import UploadButton from "@/components/ui/UploadButton";

const ManageNftsNew = () => {
  const { t } = useTranslation();

  return (
    <>
      <Space size="medium" />
      <H1>{t("create_new_collection")}</H1>
      <Space size="medium" />

      <Form>
        <div className="flex w-full items-center gap-4">
          <Input placeholder={t("collection_name")} />
          <UploadButton
            buttonText={t("choose_img")}
            placeholder={t("cover_image_file")}
          />
        </div>
        <TextArea placeholder={t("collection_description")} className="" />

        <div>
          <Button rightArrow size="big" className="">
            {t("create_collection")}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ManageNftsNew;
