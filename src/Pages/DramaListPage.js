import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

// Bring in the asynchronous fetchDramas action
import { dramasSelector, fetchDramas } from "../Slices/dramas";
import { Drama } from "../Components/Drama";
import LoadFail from "../Components/LoadFail";
import Loading from "../Components/Loading";

const DramaListPage = () => {
  const dispatch = useDispatch();
  const { dramas, loading, hasErrors } = useSelector(dramasSelector);

  useEffect(() => {
    dispatch(fetchDramas());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderDramas = () => {
    if (loading) return <Loading />;
    if (hasErrors) return <LoadFail />;
    return dramas.map((drama) => <Drama key={drama.id} drama={drama} />);
  };

  return (
    <section className="container">
      <h1>Drama List</h1>
      <div className="jumbotron">{renderDramas()}</div>
    </section>
  );
};

export default DramaListPage;
