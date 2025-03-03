import React from "react";
import { Paper, Typography, Grid, Container } from "@mui/material";

function Refund() {
  return (
    <Grid style={{ backgroundColor: "#83bec9", padding: "50px" }}>
      <Paper elevation={1} style={{ borderRadius: "50px", padding: "20px" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            color: "#05445e",
            padding: "3%",
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "poppins, sans-sarif",
          }}
        >
          Refund Policy
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            marginTop: "30px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          Our Refund Policy was last updated [DATE].{" "}
        </Typography>
        <Typography
          style={{
            marginTop: "30px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          {" "}
          If, for any reason, You are not completely satisfied with a purchase
          We invite You to review our policy on refunds and returns. This Return
          and Refund Policy was generated by TermsFeed Return and Refund Policy
          Generator.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-sarif",
            marginTop: "20px",
            fontSize: "13px",
          }}
        >
          The following terms are applicable for any products that You purchased
          with Us.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-sarif",
            marginTop: "30px",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Interpretation and Definitions
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-sarif",
            marginTop: "10px",
            fontSize: "13px",
          }}
        >
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            fontWeight: 600,
            fontFamily: "poppins, sans-sarif",
            marginTop: "30px",
            fontSize: "16px",
          }}
        >
          Definitions
        </Typography>
        <Typography
          variant="h9"
          style={{
            color: "#05445e",
            fontFamily: "poppins, sans-sarif",
            fontSize: "13px",
          }}
        >
          <ul>
            <li>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "15px",
                  fontSize: "13px",
                }}
              >
                "Company" (referred to as either "the Company", "We", "Us" or
                "Our" in this Agreement) refers to [COMPANY_INFORMATION].
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "15px",
                  fontSize: "13px",
                }}
              >
                "Goods" refers to the items offered for sale on the Service.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "15px",
                  fontSize: "13px",
                }}
              >
                "Orders" means a request by You to purchase Goods from Us.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "15px",
                  fontSize: "13px",
                }}
              >
                "Service" refers to the Website.
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "15px",
                  fontSize: "13px",
                }}
              >
                "Website" refers to [HapiDoc], accessible from [WEBSITE_URL].
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "15px",
                  fontSize: "13px",
                }}
              >
                "You" means the individual accessing or using the Service, or
                the company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </Typography>
            </li>
          </ul>
        </Typography>
        <Grid>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-sarif",
              fontWeight: 600,
              marginTop: "30px",
              fontSize: "16px",
            }}
          >
            Your Order Cancellation Rights
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            You are entitled to cancel Your Order within 14 days without giving
            any reason for doing so.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            The deadline for cancelling an Order is 14 days from the date on
            which You received the Goods or on which a third party you have
            appointed, who is not the carrier, takes possession of the product
            delivered.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            In order to exercise Your right of cancellation, You must inform Us
            of your decision by means of a clear statement. You can inform us of
            your decision by:
          </Typography>
          <Typography
            variant="h9"
            style={{
              color: "#05445e",
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            <ul>
              <li>
                By visiting this page on our website:{" "}
                <a href="[WEBSITE_CONTACT_PAGE_URL]">Contact Us</a>
              </li>
              <li>
                By sending us an email:{" "}
                <a href="mailto:[WEBSITE_CONTACT_EMAIL]">
                  [WEBSITE_CONTACT_EMAIL]
                </a>
              </li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            We will reimburse You no later than 14 days from the day on which We
            receive the returned Goods. We will use the same means of payment as
            You used for the Order, and You will not incur any fees for such
            reimbursement.
          </Typography>
        </Grid>

        <Grid>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-sarif",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Conditions
          </Typography>

          <Typography
            variant="body1"
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            To cancel your order, you can also:
          </Typography>
          <Typography
            variant="h9"
            style={{
              color: "#05445e",
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            <ul>
              <li>
                Visit this page on our website: [WEBSITE_CONTACT_PAGE_URL]
              </li>
              <li>Send us an email: [support@truquest.com]</li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontFamily: "poppins, sans-sarif",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Conditions for Returns:
          </Typography>
          <Typography
            variant="h9"
            style={{
              color: "#05445e",
              fontFamily: "poppins, sans-sarif",
              fontSize: "13px",
            }}
          >
            <ul>
              <li>The Goods were purchased in the last 14 days</li>
              <li>The Goods are in the original packaging</li>
              <li>The following Goods cannot be returned:</li>
              <li>
                The supply of Goods made to Your specifications or clearly
                personalized.
              </li>
              <li>
                The supply of Goods which according to their nature are not
                suitable to be returned, deteriorate rapidly or where the date
                of expiry is over.
              </li>
              <li>
                The supply of Goods which are not suitable for return due to
                health protection or hygiene reasons and were unsealed after
                delivery.
              </li>
              <li>
                The supply of Goods which are, after delivery, according to
                their nature, inseparably mixed with other items.
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-sarif",
              fontWeight: "600",
              marginTop: "35px",
              fontSize: "16px",
            }}
          >
            Returning Goods
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            We reserve the right to refuse returns of any merchandise that does
            not meet the above return conditions in our sole discretion.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "12px" }}
          >
            <span style={{ fontWeight: 600 }}>
              You are responsible for the cost and risk of returning the Goods
              to Us.
            </span>{" "}
            You should send the Goods to the following address:
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            [ADDRESS]
          </Typography>
          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
          >
            We cannot be held responsible for Goods damaged or lost in return
            shipment. Therefore, We recommend using an insured and trackable
            mail service. We are unable to issue a refund without actual receipt
            of the Goods or proof of received return delivery.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              fontFamily: "poppins, sans-sarif",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Gifts
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontFamily: "poppins, sans-sarif",
              marginTop: "15px",
              fontSize: "13px",
            }}
          >
            If the Goods were marked as a gift when purchased and then shipped
            directly to you, You'll receive a gift credit for the value of your
            return. Once the returned product is received, a gift certificate
            will be mailed to You.
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontFamily: "poppins, sans-sarif",
              marginTop: "15px",
              fontSize: "13px",
              marginBottom: "50px",
            }}
          >
            If the Goods weren't marked as a gift when purchased, or the gift
            giver had the Order shipped to themselves to give it to You later,
            We will send the refund to the gift giver.
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Refund;
