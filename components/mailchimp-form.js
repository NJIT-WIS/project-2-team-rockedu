import { Box, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@mui/material';

const mailchimpForm = () => {
  // TODO: add Validation
  const { register, handleSubmit, formState: { errors, isSubmitting }, control } = useForm({
    defaultValues: {
      name: "",
      email: ""
    }
  });
  const onSubmit = async (data) => {
    console.log(data)
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(2000);
  }

  return (
    <>
      <Box sx={{
        display: 'none', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 4,
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Subscribe to our Mail
        </Typography>
        <Controller
          name="Name"
          control={control}
          defaultValue=""
          render={({ field }) =>
            <TextField
              disabled={isSubmitting}
              sx={{ mb: 2 }}
              label="Name"
              {...field} />
          }
        />

        <Controller
          name="Email"
          control={control}
          defaultValue=""
          render={({ field }) =>
            <TextField
              disabled={isSubmitting}
              sx={{ mb: 2 }}
              label="Email"
              {...field} />}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}>
          Submit
        </Button>
      </Box>
      <div
        dangerouslySetInnerHTML={{
          __html: `<!-- Begin Mailchimp Signup Form -->
        <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
        <style type="text/css">
          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>
        <div id="mc_embed_signup">
            <form action="https://github.us21.list-manage.com/subscribe/post?u=09ce900db9136ad434b34df7a&amp;id=6804e7fb27&amp;f_id=00fbb2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group">
          <label for="mce-FNAME">Name </label>
          <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
          <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
        </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
          <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
        </div>
          <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_09ce900db9136ad434b34df7a_6804e7fb27" tabindex="-1" value=""></div>
                <div class="optionalParent">
                    <div class="clear foot">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                        <p class="brandingLogo"><a href="http://eepurl.com/iqM1Y6" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
                    </div>
                </div>
            </div>
        </form>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
        <!--End mc_embed_signup-->`
        }}
      ></div>
    </>
  )
}

export default mailchimpForm