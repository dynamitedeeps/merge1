import React, { useCallback, useEffect, useState } from "react";
import Text from "../../common/Text";
import {
  Add,
  CalendarMonth,
  FilterAlt,
  MenuOutlined,
} from "@mui/icons-material";
import CardView from "../../component/contentScreen/CardView";
import CreateContent from "../../component/contentScreen/CreateContent";
import ContentHeader from "../../component/contentScreen/ContentHeader";
import ListView from "../../component/contentScreen/ListView";
import { deleteData, getData, getDataTemp } from "../../utils/api";
import swal from "@sweetalert/with-react";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../utils/formatErrorMessage";
import ContentLoader from "../../common/Loader/contentLoader";

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [cardView, SetCardView] = useState(true);

  const [data, setData] = useState();
  const [eventId, setEventId] = useState("");

  const fetchAllEvents = async () => {
    setLoading(true);
    const res = await getData("event/created");
    if (res.data) {
      setData(res.data?.events);
    } else {
      console.log(res, "Error while fetching business profiles");
    }
    setLoading(false);
  };

  const deleteEvent = async (id) => {
    swal({
      title: "Are you sure that you want to delete this Event?",
      // text: "Are you sure that you want to delete this Image?",
      icon: "warning",
      buttons: [true, "Delete"],

      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await deleteData(`event/${id}`);
        if (res.data) {
          enqueueSnackbar(res.data.message ?? "", {
            variant: "success",
          });
          fetchAllEvents();
        } else {
          enqueueSnackbar(
            res.error?.message
              ? formatErrorMessage(res.error?.message)
              : "Something went wrong",
            {
              variant: "error",
            }
          );
        }
      }
    });
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const toggleCardView = useCallback(() => {
    SetCardView((cardView) => !cardView);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <ContentHeader
        handleOpen={handleOpen}
        toggleCardView={toggleCardView}
        cardView={cardView}
      />
      {!loading ? (
        <>
          {cardView ? (
            <CardView
              // loading={loading}
              data={data}
              setEventId={setEventId}
              deleteEvent={deleteEvent}
            />
          ) : (
            <ListView
              loading={loading}
              data={data}
              setEventId={setEventId}
              deleteEvent={deleteEvent}
            />
          )}
        </>
      ) : (
        <ContentLoader />
      )}

      <CreateContent
        open={open}
        handleClose={handleClose}
        fetchAllEvents={fetchAllEvents}
        eventId={eventId}
        setEventId={setEventId}
      />
    </>
  );
};

export default Content;
