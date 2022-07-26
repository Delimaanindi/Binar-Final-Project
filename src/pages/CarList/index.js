import React from "react";
import "./index.css";
import { Form, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IntlProvider, FormattedNumber } from "react-intl";
import SectionHero from "../../components/SectionHero";
// import Skeleton from "react-loading-skeleton";
import LoadingSkeleton from "../../components/LoadingSkeleton";
const CariMobil = () => {
  const BASE_URL = "https://bootcamp-rent-car.herokuapp.com/admin/car/";

  let navigate = useNavigate();
  const [savedCars, setSavedCars] = useState([]);
  const [mobil, setMobil] = useState([]);
  const [loading, setLoading] = useState(true);
  const [namaMobil, setNamaMobil] = useState("");
  const [kategoriMobil, setKategoriMobil] = useState("");
  const [hargaMobil, setHargaMobil] = useState("");
  // const [status, setStatus] = useState(false);

  useEffect(() => {
    setCarsList(BASE_URL);
  }, []);

  function setCarsList(URL) {
    axios
      .get(URL)
      .then((response) => {
        setMobil(response.data);
        setSavedCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }

  function handleViewDetail(id) {
    navigate(`/cars/${id}`);
  }

  const handleCariMobil = (e) => {
    e.preventDefault();

    if (savedCars.length > 0) {
      const filterData = savedCars.filter(
        (items) =>
          items.name.toLocaleLowerCase() === namaMobil.toLocaleLowerCase() ||
          items.category === kategoriMobil
      );
      setMobil(filterData);
    }
    setNamaMobil("");
    setKategoriMobil("");
    setHargaMobil("");
  };

  return (
    <div>
      <SectionHero />
      <Form className="cari-content">
        <Form.Group controlId="formNama" className="mt-3">
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ketik Nama/Tipe Mobil"
            autoComplete="off"
            onChange={(e) => setNamaMobil(e.target.value)}
            value={namaMobil}
          />
        </Form.Group>
        <Form.Group controlId="formKategori" className="mt-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select onChange={(e) => setKategoriMobil(e.target.value)}>
            <option key="blankChoice" hidden>
              Masukan Kapasitas Mobil
            </option>
            <option value="2 - 4 orang">2 - 4 Orang</option>
            <option value="4 - 6 orang">4 - 6 Orang</option>
            <option value="6 - 8 orang">6 - 8 Orang</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formHarga" className="mt-3">
          <Form.Label>Harga</Form.Label>
          <Form.Select onChange={(e) => setHargaMobil(e.target.value)}>
            <option key="blankChoice" hidden>
              Masukan Harga Sewa per Hari
            </option>
            <option value="400000"> &#60; Rp.400.000 </option>
            <option value="500000">Rp.400.000 - Rp. 600.000</option>
            <option value="600000"> &#62; Rp. 600.000</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formSewa" className="mt-3">
          <Form.Label>Status</Form.Label>
          <Form.Select disabled>
            <option key="blankChoice" hidden>
              Status Mobil
            </option>
            <option value="sedia">Sedia</option>
            <option value="sewa">Disewa</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="mt-4"
          onClick={handleCariMobil}
        >
          Cari Mobil
        </Button>
      </Form>
      <div className="mt-5 hasil-card">
        {loading ? (
          <LoadingSkeleton panjangMobil={mobil.length} />
        ) : (
          <div className="d-flex flex-wrap align-items-baseline justify-content-around">
            {mobil.map((result) => {
              return (
                <Card
                  key={result.id}
                  style={{ width: "18rem", margin: "1rem" }}
                >
                  <Card.Img variant="top" src={result.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{result.name}</Card.Title>
                    <IntlProvider locale="id">
                      <FormattedNumber
                        value={result.price}
                        style="currency"
                        currency="IDR"
                      />{" "}
                      / hari
                    </IntlProvider>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-grid mt-auto">
                      <Button
                        variant="success"
                        onClick={() => handleViewDetail(result.id)}
                      >
                        Pilih Mobil
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CariMobil;
