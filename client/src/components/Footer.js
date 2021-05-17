import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFooterItems } from '../utils/footerService';
import GoogleMap from './GoogleMaps';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 150px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0px;
`;

const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 75px;
  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 1vw;
  margin-right: 1vw;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledP = styled.p`
  margin: auto;
  font-size: 0.9rem;
  padding: 0.2rem;
`;
const StyledEL = styled.p`
  color: white;
  margin-left: 50%;
`;

const StyledSuperSection = styled.section`
  display: flex;
  margin: 5px 0;
  height: 150px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1350px) {
    flex-direction: row;
  }
`;

const StyledSection = styled.section`
  width: 100%;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

const Footer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const footerInfo = await getFooterItems('info');
        setData(footerInfo);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <StyledFooter>
        {error ? <StyledEL>Error - theres a bug in the system</StyledEL> : null}
        {loading ? <StyledEL>Loading - please wait</StyledEL> : null}
        <StyledSuperSection>
          {/* Her begynner nav */}
          <StyledSection>
            {data?.length > 0 &&
              data.map((footer) => (
                <StyledFooterWrapper key={footer.zip}>
                  {footer?.nav?.map((navigation) =>
                    navigation.link?.map((link) => (
                      <StyledP key={link._key}>
                        <StyledA href={`/${link.href}`}>{link.name}</StyledA>
                      </StyledP>
                    ))
                  )}
                </StyledFooterWrapper>
              ))}
          </StyledSection>
          <StyledSection>
            {data?.length > 0 &&
              data.map((footer) => (
                <StyledFooterWrapper key={footer.zip}>
                  <StyledP>{footer.name}</StyledP>
                  <StyledP>
                    Adresse: {footer.address}, {footer.zip}, {footer.postalcode}
                  </StyledP>
                  <StyledP>
                    Tipstelefon:
                    <StyledA href={`callto:${footer.phone}`}>
                      {footer.phone}
                    </StyledA>
                  </StyledP>
                  <StyledP>
                    Epost:
                    <StyledA href={`mailto:${footer.mail}`}>
                      {footer.mail}
                    </StyledA>
                  </StyledP>
                </StyledFooterWrapper>
              ))}
          </StyledSection>
        </StyledSuperSection>
        <section>{data?.length > 0 && <GoogleMap data={data} />}</section>
      </StyledFooter>
    </>
  );
};
export default Footer;
