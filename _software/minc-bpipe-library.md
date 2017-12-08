---
title: minc-bpipe-library MINC based T1 bpipe preprocessing pipeline
layout: pagenonav
---

It is common for differing MRI studies to have widely varying fields of view, orienations and intensity ranges for T1-weighted images.
The minc-bpipe-library pipeline provides a clusted-integrated preprocessing pipeline for T1-weighted MR images which attempts to standardize images through the application of ANTs[1], minc-toolkit[2] and MNI priors[3].
The pipeline is contstructed in a modular manner using the bpipe[4] pipelining tool, enabling parallel processing of subjects and integration with clusters if available.
minc-bpipe-library performs the steps of bias field correction[5], image registration[1,2], masking and brain extraction[6], and field-of-view cropping in order to provide standardized outputs in:
native space, un-resampled lsq6 (rigid) MNI space, and lsq12 MNI space.

These outputs are suitable for further processing by a variety of pipelines such as CIVET, MAGeTbrain or antsMultivariateTemplate builder, or Freesurfer.


>[1] Avants, B. B., Epstein, C. L., Grossman, M., & Gee, J. C. (2008). Symmetric diffeomorphic image registration with cross-correlation: Evaluating automated labeling of elderly and neurodegenerative brain. Medical Image Analysis, 12(1), 26–41. http://doi.org/10.1016/j.media.2007.06.004
>[2] Vincent, R. D., Neelin, P., Khalili-Mahani, N., Janke, A. L., Fonov, V. S., Robbins, S. M., … Evans, A. C. (2016). MINC 2.0: A Flexible Format for Multi-Modal Images. Frontiers in Neuroinformatics, 10(August), 1–8. http://doi.org/10.3389/fninf.2016.00035
>[3] Fonov, V., Evans, A. C., Botteron, K., Almli, C. R., McKinstry, R. C., & Collins, D. L. (2011). Unbiased average age-appropriate atlases for pediatric studies. NeuroImage, 54(1), 313–327. http://doi.org/10.1016/j.neuroimage.2010.07.033
>[4] Sadedin, S. P., Pope, B., & Oshlack, A. (2012). Bpipe: A tool for running and managing bioinformatics pipelines. Bioinformatics, 28(11), 1525–1526. http://doi.org/10.1093/bioinformatics/bts167
>[5] Tustison, N. J., Avants, B. B., Cook, P. a, Zheng, Y., Egan, A., Yushkevich, P. a, & Gee, J. C. (2010). N4ITK: improved N3 bias correction. IEEE Transactions on Medical Imaging, 29(6), 1310–20. http://doi.org/10.1109/TMI.2010.2046908
>[6] Eskildsen, S. F., Coupé, P., Fonov, V., Manjón, J. V, Leung, K. K., Guizard, N., … Collins, D. L. (2012). BEaST: brain extraction based on nonlocal segmentation technique. NeuroImage, 59(3), 2362–73. http://doi.org/10.1016/j.neuroimage.2011.09.012
