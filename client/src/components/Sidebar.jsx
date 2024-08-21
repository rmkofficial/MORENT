import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      PaperProps={{
        style: { top: "80px", width: "250px", padding: "16px" }, 
      }}
    >
      <div className="space-y-6">
        <div>
          <Typography variant="subtitle1" gutterBottom>
            TYPE
          </Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="Sport (10)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="SUV (12)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="MPV (16)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Sedan (20)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Coupe (14)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Hatchback (14)"
          />
        </div>

        <div>
          <Typography variant="subtitle1" gutterBottom>
            CAPACITY
          </Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="2 Person (10)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="4 Person (14)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="6 Person (12)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked color="primary" />}
            label="8 or More (16)"
          />
        </div>

        <div>
          <Typography variant="subtitle1" gutterBottom>
            PRICE
          </Typography>
          <Slider
            defaultValue={100}
            aria-labelledby="price-slider"
            valueLabelDisplay="auto"
            max={100}
            color="primary"
          />
          <Typography variant="body2">Max. $100.00</Typography>
        </div>
      </div>
    </Drawer>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
