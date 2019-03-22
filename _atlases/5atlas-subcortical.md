---
title: 3T In Vivo High-Resolution Atlas of the Striatum, Globus Pallidus and Thalamus
layout: default
---

The current implementation of the MAGeT-Brain pipeline allows for subject-based segmentation of the [hippocampal subfields](http://cobralab.ca/atlases/Hippocampus-subfields/), [hippocampal white matter](http://cobralab.ca/atlases/Hippocampus-whitematter/), [cerebellar lobules](http://cobralab.ca/atlases/Cerebellum/), and the [striatum, globus pallidus, and thalamus](http://cobralab.ca/atlases/Striatum_Thalamus_Globus/). For hippocampal and cerebellar segmentation, five atlases, created from manual segmentation on five high-resolution MRI templates, are used to derive subject-based segmentation (Winterburn et al., 2013; Amaral et al., 2016; Park et al., 2014). However, segmentation of the striatum, globus pallidus, and thalamus are derived from a single input atlas, which was derived from reconstructed histological data warped onto the Colin27 MRI template. As this subcortical atlas was created long before our more recent atlases, the resulting difference in input atlas source requires two separate executions of MAGeT-Brain. 



![5Atlas Figure]({{ site.baseurl }}/images/5atlas.jpg)



Here, we reproduced the segmentation of the striatum, globus pallidus and thalamus by warping the histologically-derived atlas to five high-resolution MRI templates (the same five MRI templates used for the hippocampal and cerebellar atlases) in order to homogenize the MAGeT-Brain input atlases and accordingly streamline future work-flows, allowing simultaneous multi-structure segmentation. Below is the link to the paper that details the methodology used for the creation of the atlases.




![5Atlas Surfaces Figure]({{ site.baseurl }}/images/5atlas-surfaces.jpg)




Full article: [Warping an atlas derived from serial histology to 5 high-resolution MRIs](https://www.nature.com/articles/sdata2018107)

Contact: stephanie.tullo@mail.mcgill.ca; mallar.chak@gmail.com

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/StillImage" property="dct:title" rel="dct:type">Warping an atlas derived from serial histology to 5 high-resolution MRIs</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://cobralab.ca/atlases/5atlas-subcortical" property="cc:attributionName" rel="cc:attributionURL">Tullo, S.; Chakravarty, M, M.</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

Citation: 

> Tullo, S., Devenyi, G. A., Patel, R., Park, M. T. M., Collins, D. L., & Chakravarty, M. M. (2018). Warping an atlas derived from serial histology to 5 high-resolution MRIs. Scientific data, 5, 180107.

----

## Download

  - [Subcortical Labels](https://github.com/CobraLab/atlases/tree/master/5-atlas-subcortical) 
  - [High-resolution T1-weighted MRI brains](http://cobralab.net/files/brains_t1.tar.bz2)
  - [High-resolution T2-weighted MRI brains](http://cobralab.net/files/brains_t2.tar.bz2)
