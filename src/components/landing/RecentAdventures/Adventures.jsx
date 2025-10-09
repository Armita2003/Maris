import useResponsive from "@/hooks/useResponsive";
import {
  Adventure,
  AdventureCompanyTypography,
  AdventureListRoleTypography,
  AdventureListTypography,
  AdventureLocationTypography,
  AdventureRoleTypography,
} from "@/Styles";
import { Grid, Stack } from "@mui/material";
import React from "react";

export default function Adventures() {
  const smallScreen = useResponsive("down", "md");

  return (
    <Stack>
      <Grid container>
        {Adventure.map((items, index) => {
          return (
            <>
              <Grid mr={smallScreen ? 0 : 1} key={index} item xs={12} md={4} sx={{ mb: smallScreen ? 3 : 0 }}>
                <AdventureCompanyTypography>{items.company}</AdventureCompanyTypography>
              </Grid>
              <Grid item xs={12} md={7} mb={smallScreen ? 4.5 : 9}>
                <Stack>
                  <AdventureRoleTypography>{items.role}</AdventureRoleTypography>
                </Stack>
                <Stack>
                  <AdventureLocationTypography>{items.location}</AdventureLocationTypography>
                </Stack>
           
                  <Stack>
                    <ul style={{ padding: smallScreen ? 16 : "auto" }}>
                      {items.list.map((list, index) => {
                        return (
                          <li key={index}>
                            <AdventureListTypography>{list}</AdventureListTypography>
                          </li>
                         
                         
                        );
                      })}
                    </ul>
                  </Stack>
              <Stack direction={'row'}>

                          <strong style={{marginRight:'5px'}}>
Tech: 
                          </strong>
                          <AdventureListTypography>

                          {items.tech}
                          </AdventureListTypography>
                          </Stack>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Stack>
  );
}
