<?php

declare(strict_types = 1);

namespace Drupal\react_photo_gallery\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Photo gallery page.
 */
class PhotoGalleryController extends ControllerBase {

  /**
   * React component page.
   */
  public function page() {
    return [
      '#markup' => '<div id="photo-gallery"></div>',
      '#attached' => [
        'library' => 'react_photo_gallery/photo_gallery',
      ],
    ];
  }

}
